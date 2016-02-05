
import expect from 'expect'
import addElement from './util/add-element'

describe('base.css', () => {

  const body = document.body
  const div = addElement('div')
  const a = addElement('a')
  const img = addElement('img')
  const svg = addElement('svg')

  it('should set body font-family', () => {
    const style = window.getComputedStyle(body)
    expect(style.fontFamily).toBe('-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Helvetica,sans-serif')
  })

  it('should set body line-height', () => {
    const style = window.getComputedStyle(body)
    expect(style.lineHeight).toBe('24px')
  })

  it('should set body margin', () => {
    const style = window.getComputedStyle(body)
    expect(style.marginTop).toBe('0px')
  })

  it('should set image max-width', () => {
    const bodyWidth = window.getComputedStyle(body).width
    expect(img.computedStyle.maxWidth).toBe(bodyWidth)
  })

  it('should set svg max-height', () => {
    const bodyHeight = window.getComputedStyle(body).height
    expect(svg.computedStyle.maxHeight).toBe(bodyHeight)
  })

})

