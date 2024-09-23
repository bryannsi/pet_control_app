import { DefaultErrorStrategy, ForeignKeyViolationStrategy, NotNullViolationStrategy, UniqueViolationStrategy } from '#error/errorStrategies.js'

class HandleErrorStrategy {
  constructor () {
    this.strategies = {
      23505: new UniqueViolationStrategy(),
      23503: new ForeignKeyViolationStrategy(),
      23502: new NotNullViolationStrategy(),
      default: new DefaultErrorStrategy()
    }
  }

  handleError (error) {
    const strategy = this.strategies[error.code] || this.strategies.default
    const response = strategy.handle(error)
    console.error(`${strategy.constructor.name}: ${response.logMessage} => ${error.detail || 'Sin detalles'}`)
    return response
  }
}

export default HandleErrorStrategy
