import { connect } from 'react-redux';
import CommenterImage04 from '../../images/user-32-04.jpg';
import CommenterImage05 from '../../images/user-32-05.jpg';
import UserImage02 from '../../images/user-40-02.jpg';




function Comments({ loadComment, comment: { comment }, comment }) {

  return (
    <div className="mt-5 pt-3 border-t border-slate-200">
      <ul className="space-y-2 mb-3">
        {/* Comment */}
        <li className="p-3 bg-slate-50 rounded">
          <div className="flex items-start space-x-3">
            <img className="rounded-full shrink-0" src={CommenterImage04} width="32" height="32" alt="User 04" />
            <div>
              <div className="text-xs text-slate-500">
                <a className="font-semibold text-slate-800" href="#0">
                  {comment.username}
                </a>{comment?.createdAt?.split('T')[0]}
                · 44min
              </div>
              <div className="text-sm">
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                  @EricaSpriggs
                </a>{comment.comment_body}
                Reading through and really enjoying "Zero to Sold" by Arvid.
              </div>
            </div>
          </div>
        </li>
        {/* Comment */}
        <li className="p-3 bg-slate-50 rounded">
          <div className="flex items-start space-x-3">
            <img className="rounded-full shrink-0" src={CommenterImage05} width="32" height="32" alt="User 05" />
            <div>
              <div className="text-xs text-slate-500">
                <a className="font-semibold text-slate-800" href="#0">
                  Kyla Scanlon
                </a>{' '}
                · 1h
              </div>
              <div className="text-sm">
                Depends on the company you're running, but if I had to choose just one book, it'd be The Personal MBA by Josh Kaufman.
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* Comments footer */}
      <div className="flex justify-between space-x-2">
        <div className="text-sm text-slate-500">
          <span className="font-medium text-slate-600">2</span> of <span className="font-medium text-slate-600">67</span> comments
        </div>
        <button className="text-sm  font-medium text-indigo-500 hover:text-indigo-600">View More Comments</button>
      </div>
      {/* Comment form */}
      {/* <div className="flex items-center space-x-3 mt-3">
        <img className="rounded-full shrink-0" src={UserImage02} width="32" height="32" alt="User 02" />
        <div className="grow">
          <label htmlFor="comment-form" className="sr-only">
            Write a comment…
          </label>
          <input
            id="comment-form"
            className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
            type="text"
            placeholder="Write a comment…"
          />
        </div>
      </div> */}
    </div>
  )
}
const mapStateToProps = state => ({
  auth: state.auth,
  feed: state.feed,
  comment: state.comment
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);