import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from 'src/components/Dropdown'
const Dropdown = Component.Dropdown

describe('Dropdown', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    Dropdown.props.id = 'id'
    vm = createComponent(Dropdown,true)
    expect(vm.$el.classList.contains('dropdown')).to.true
  })

  it('right-show', done => {
    vm = createVM({
      template: `
        <div>
          <r-btn class="green white-text" v-dropdown:dropdownB>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>
          <r-dropdown id="dropdownB" right hover>
            <li><a class="dropdown-item" href="javascript:;">吃饭</a></li>
            <li><a class="dropdown-item" href="javascript:;">睡觉</a></li>
          </r-dropdown>
        </div>
      `
    }, true)

    vm.$nextTick( () => {
      debugger
      expect(vm.$children[1].$el.classList.contains('dropdown-open-from-right')).to.be.true
      done()
    })
  })

});