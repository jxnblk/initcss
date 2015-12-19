
import expect from 'expect'
import addElement from './util/add-element'

describe('table.css', () => {

  const table = addElement('table')
  const th = addElement('th')
  const td = addElement('td')

  it('should reset table border-spacing', () => {
    expect(table.computedStyle.borderSpacing).toBe('0px 0px')
  })

  it('should set th padding', () => {
    expect(th.computedStyle.paddingTop).toBe('8px')
  })

  it('should set td padding', () => {
    expect(td.computedStyle.paddingTop).toBe('8px')
  })

  it('should set th font-weight', () => {
    expect(th.computedStyle.fontWeight).toBe('600')
  })

  it('should set th border-bottom', () => {
    expect(th.computedStyle.borderBottomWidth).toBe('3px')
  })

  it('should set td vertical-align', () => {
    expect(td.computedStyle.verticalAlign).toBe('top')
  })

})

