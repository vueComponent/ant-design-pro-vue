import { Menu, Icon, Input } from 'ant-design-vue'

const { Item, ItemGroup, SubMenu } = Menu
const { Search } = Input

export default {
  name: 'Tree',
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    openKeys: {
      type: Array,
      default: () => []
    },
    search: {
      type: Boolean,
      default: false
    },
    treeTitle: {
      type: String,
      default: ''
    }
  },
  created () {
    this.localOpenKeys = this.openKeys.slice(0)
  },
  data () {
    return {
      localOpenKeys: []
    }
  },
  methods: {
    handlePlus (item) {
      this.$emit('add', item)
    },
    handleTitleClick (...args) {
      this.$emit('titleClick', { args })
    },

    renderSearch () {
      return (
        <Search
          placeholder="input search text"
          style="width: 100%; margin-bottom: 1rem"
        />
      )
    },
    renderIcon (icon) {
      return icon && (<Icon type={icon} />) || null
    },
    renderTreeIcon(percentage){
      if(parseInt(percentage)==0||!percentage||percentage=='') return (<i class="placeholderI"></i>)
      if(parseInt(percentage)<100) return (<Icon type="clock-circle" theme="filled" />)
      if(parseInt(percentage)==100) return (<Icon type="check-circle" theme="filled" />)
    },
    renderMenuItem (item) {
      return (
        <Item key={item.basisMarkId}>
          {this.renderTreeIcon(item.progress)}
          { this.renderIcon(item.icon) }
          <span class="treeSubTitle">{ item.basisMarkName }</span>
          <span class="treeSubPercentage">{item.progress>0?item.progress+"%":item.progress}</span>
          <a class="btn" style="width: 20px;z-index:1300" {...{ on: { click: () => this.handlePlus(item) } }}><a-icon type="plus"/></a>
        </Item>
      )
    },
    renderItem (item) {
      return item.childList ? this.renderSubItem(item, item.basisMarkId) : this.renderMenuItem(item, item.basisMarkId)
    },
    renderItemGroup (item) {
      const childrenItems = item.childList.map(o => {
        return this.renderItem(o, o.basisMarkId)
      })

      return (
        <ItemGroup key={item.basisMarkId}>
          <template slot="title">
            <span>{ item.basisMarkName }</span>
            <a-dropdown>
              <a class="btn"><a-icon type="ellipsis" /></a>
              <a-menu slot="overlay">
                <a-menu-item key="1">新增</a-menu-item>
                <a-menu-item key="2">合并</a-menu-item>
                <a-menu-item key="3">移除</a-menu-item>
              </a-menu>
            </a-dropdown>
          </template>
          { childrenItems }
        </ItemGroup>
      )
    },
    renderSubItem (item, key) {
      const childrenItems = item.childList && item.childList.map(o => {
        return this.renderItem(o, o.basisMarkId)
      })

      const title = (
        <span slot="title">
          {this.renderTreeIcon(item.percentage)}
          { this.renderIcon(item.icon) }
          <span class="treeSubTitle">{ item.basisMarkName }</span>
          <span class="treeSubPercentage">{item.percentage}</span>
        </span>
      )

      if (item.group) {
        return this.renderItemGroup(item)
      }
      // titleClick={this.handleTitleClick(item)}
      return (
        <SubMenu key={key}>
          { title }
          { childrenItems }
        </SubMenu>
      )
    }
  },
  render () {
    const { dataSource, search, treeTitle } = this.$props

    // this.localOpenKeys = openKeys.slice(0)
    const list = dataSource.map(item => {
      return this.renderItem(item)
    })

    return (
      <div class="tree-wrapper">
        { search ? this.renderSearch() : null }
        <div class="tree-title">{ treeTitle }</div>
        <Menu mode="inline" inlineIndent={0} class="custom-tree" {...{ on: { click: item => this.$emit('click', item), 'update:openKeys': val => { this.localOpenKeys = val } } }} openKeys={this.localOpenKeys}>
          { list }
        </Menu>
      </div>
    )
  }
}
