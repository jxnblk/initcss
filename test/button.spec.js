
import expect from 'expect'
import addElement from './util/add-element'

describe('button.css', () => {

  const button = addElement('button')

  it('should inherit button font-family', () => {
    expect(button.computedStyle.fontFamily).toBe('-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Helvetica,sans-serif')
  })

  it('should inherit button font-size', () => {
    expect(button.computedStyle.fontSize).toBe('16px')
  })

  it('should set button font-weight', () => {
    expect(button.computedStyle.fontWeight).toBe('700')
  })

  it('should set button height', () => {
    expect(button.computedStyle.height).toBe('40px')
  })

  it('should reset button margin', () => {
    expect(button.computedStyle.marginTop).toBe('0px')
  })

  it('should set button padding', () => {
    console.log('Button style', button.computedStyle.paddingTop)
    expect(button.computedStyle.paddingTop).toBe('8px')
    expect(button.computedStyle.paddingLeft).toBe('16px')
  })

})

