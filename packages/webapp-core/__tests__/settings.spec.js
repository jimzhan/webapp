const settings = require('../settings')


describe('@webapp/core settings', () => {
  it('use default settings', () => {
    expect(settings.get('env')).toBe('test')
    expect(typeof settings.get('port')).toBe('number')
  })

  it('use one-time environmental settings', () => {
    process.env.NODE_ENV = 'WHATEVER'
    expect(settings.get('env')).toBe('test')
  })
})
