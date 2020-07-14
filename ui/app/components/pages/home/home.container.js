import Home from './home.component'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { unconfirmedTransactionsCountSelector } from '../../../selectors/confirm-transaction'

const mapStateToProps = state => {
  console.log('home mapStateToProps');
  const { metamask, appState } = state
  const { noActiveNotices, lostAccounts, seedWords, suggestedTokens } = metamask
  const { forgottenPassword } = appState
  console.log('home mapStateToProps', metamask, appState);
  return {
    noActiveNotices,
    lostAccounts,
    forgottenPassword,
    seedWords,
    suggestedTokens,
    unconfirmedTransactionsCount: unconfirmedTransactionsCountSelector(state),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Home)
