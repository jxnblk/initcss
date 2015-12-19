
import expect from 'expect'
import addElement from './util/add-element'

describe('button.css', () => {

  const button = addElement('button')

  it('should inherit button font-family', () => {
    expect(button.computedStyle.fontFamily).toBe('-apple-system,sans-serif')
  })

  it('should inherit button font-size', () => {
    expect(button.computedStyle.fontSize).toBe('16px')
  })

  it('should set button font-weight', () => {
    expect(button.computedStyle.fontWeight).toBe('600')
  })

  it('should set button height', () => {
    expect(button.computedStyle.height).toBe('40px')
  })

  it('should reset button margin', () => {
    expect(button.computedStyle.marginTop).toBe('0px')
  })

  it('should set button padding', () => {
    expect(button.computedStyle.paddingTop).toBe('8px')
    expect(button.computedStyle.paddingLeft).toBe('16px')
  })

  it('should set button border-radius', () => {
    expect(button.computedStyle.borderTopLeftRadius).toBe('3px')
  })

  it('should set button color', () => {
    expect(button.computedStyle.color).toBe('rgb(255, 255, 255)')
  })

  it('should set button background-color', () => {
    expect(button.computedStyle.backgroundColor).toBe('rgb(0, 119, 204)')
  })

})

