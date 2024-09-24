import { DefaultErrorStrategy, ForeignKeyViolationStrategy, NotNullViolationStrategy, SyntaxErrorStrategy, UndefinedColumnStrategy, UniqueViolationStrategy } from '#error/errorStrategies.js'

class HandleErrorStrategy {
  constructor () {
    this.strategies = {
      default: new DefaultErrorStrategy(),
      23505: new UniqueViolationStrategy(),
      23503: new ForeignKeyViolationStrategy(),
      23502: new NotNullViolationStrategy(),
      42601: new SyntaxErrorStrategy(),
      42703: new UndefinedColumnStrategy()
    }
  }

  handleError (error) {
    const strategy = this.strategies[error.code] || this.strategies.default
    const response = strategy.handle(error)
    console.error(`${strategy.constructor.name}: ${response.logMessage} ===> ${error.detail !== undefined ? error.detail : `${error.message} ${error.query}` || 'Sin detalles'}`)

    return response
  }
}

export default HandleErrorStrategy
