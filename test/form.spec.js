
import expect from 'expect'
import addElement from './util/add-element'

describe('form.css', () => {

  const form = addElement('form')
  const input = addElement('input')
  input.setAttribute('type', 'text')
  const select = addElement('select')
  const textarea = addElement('textarea')
  const fieldset = addElement('fieldset')
  const legend = addElement('legend')
  const label = addElement('label')

  it('should set form margin-bottom', () => {
    expect(form.computedStyle.marginBottom).toBe('16px')
  })

  it('should inherit input font-family', () => {
    expect(input.computedStyle.fontFamily).toBe('-apple-system,sans-serif')
  })

  it('should inherit select font-family', () => {
    expect(select.computedStyle.fontFamily).toBe('-apple-system,sans-serif')
  })

  it('should inherit textarea font-family', () => {
    expect(textarea.computedStyle.fontFamily).toBe('-apple-system,sans-serif')
  })

  it('should reset fieldset padding and border', () => {
    expect(fieldset.computedStyle.paddingTop).toBe('0px')
    expect(fieldset.computedStyle.borderTopWidth).toBe('0px')
  })

  it('should set legend font-size', () => {
    expect(legend.computedStyle.fontSize).toBe('20px')
  })

  it('should set input display block', () => {
    expect(input.computedStyle.display).toBe('block')
  })

  it('should set input width', () => {
    const bodyWidth = window.getComputedStyle(document.body).width
    expect(input.computedStyle.width).toBe(bodyWidth)
  })

  it('should set label font-size', () => {
    expect(label.computedStyle.fontSize).toBe('14px')
  })

  it('should set input height', () => {
    expect(input.computedStyle.height).toBe('40px')
  })

  it('should set textarea padding', () => {
    expect(textarea.computedStyle.paddingTop).toBe('8px')
  })

  it('should set select padding', () => {
    expect(select.computedStyle.paddingTop).toBe('8px')
  })

})

