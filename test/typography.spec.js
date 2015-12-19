
import expect from 'expect'
import addElement from './util/add-element'

describe('typography.css', () => {

  const h1 = addElement('h1')
  const h2 = addElement('h2')
  const h3 = addElement('h3')
  const h4 = addElement('h4')
  const h5 = addElement('h5')
  const h6 = addElement('h6')
  const p = addElement('p')
  const ul = addElement('ul')
  const code = addElement('code')
  const pre = addElement('pre')
  const blockquote = addElement('blockquote')
  const hr = addElement('hr')

  h1.textContent = 'h1'
  h2.textContent = 'h2'
  h3.textContent = 'h3'
  h4.textContent = 'h4'
  h5.textContent = 'h5'
  h6.textContent = 'h6'
  p.textContent = 'paragraph'
  code.textContent = 'code'
  pre.textContent = 'pre'

  it('should set h1 font-weight', () => {
    expect(h1.computedStyle.fontWeight).toBe('600')
  })

  it('should set h1 line-height', () => {
    expect(h1.computedStyle.lineHeight).toBe('40px')
  })

  it('should set h1 margins', () => {
    expect(h1.computedStyle.marginTop).toBe('32px')
    expect(h1.computedStyle.marginBottom).toBe('16px')
  })

  it('should set h1 font-size', () => {
    expect(h1.computedStyle.fontSize).toBe('32px')
  })

  it('should set h2 font-size', () => {
    expect(h2.computedStyle.fontSize).toBe('24px')
  })

  it('should set h3 font-size', () => {
    expect(h3.computedStyle.fontSize).toBe('20px')
  })

  it('should set h4 font-size', () => {
    expect(h4.computedStyle.fontSize).toBe('16px')
  })

  it('should set h5 font-size', () => {
    expect(h5.computedStyle.fontSize).toBe('14px')
  })

  it('should set h6 font-size', () => {
    expect(h6.computedStyle.fontSize).toBe('12px')
  })

  it('should set p margins', () => {
    expect(p.computedStyle.marginTop).toBe('16px')
    expect(p.computedStyle.marginBottom).toBe('16px')
  })

  it('should set ul padding-left', () => {
    expect(ul.computedStyle.paddingLeft).toBe('40px')
  })

  it('should set code border-radius', () => {
    expect(code.computedStyle.borderTopRightRadius).toBe('3px')
  })

  it('should set pre border-left-width', () => {
    expect(pre.computedStyle.borderLeftWidth).toBe('3px')
  })

  it('should set blockquote border-left-width', () => {
    expect(blockquote.computedStyle.borderLeftWidth).toBe('3px')
  })

  it('should set hr border-bottom-width', () => {
    expect(hr.computedStyle.borderBottomWidth).toBe('1px')
  })

})

