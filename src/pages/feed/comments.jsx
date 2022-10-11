import { connect } from 'react-redux';
import CommenterImage04 from '../../images/user-32-04.jpg';
import CommenterImage05 from '../../images/user-32-05.jpg';
import UserImage02 from '../../images/user-40-02.jpg';




function Comments({ data }) {

  return (
    <div className="mt-5 pt-3 border-t border-slate-200 border-none">
      <ul className="space-y-2 mb-3">
        {/* Comment */}
        <li className="p-3 bg-slate-50 rounded">
          <div className="flex items-start space-x-3">
            <img className="rounded-full shrink-0" src={CommenterImage04} width="32" height="32" alt="User 04" />
            <div>
              <div className="text-xs text-slate-500">
                <a className="font-semibold text-slate-800 mr-2" href="#0">
                  {data.username}
                </a>{''}
                {data?.createdAt?.split('T')[1].split('.')[0]}
              </div>
              <div className="text-sm">
                <a className="font-medium text-indigo-500 hover:text-indigo-600 mr-2" href="#0">
                  @EricaSpriggs
                </a>{''}
                {data.comment_body}
              </div>
            </div>
          </div>
        </li>
        {/* Comment */}
        {/* <li className="p-3 bg-slate-50 rounded">
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
        </li> */}
      </ul>
      {/* Comments footer */}
      {/* <div className="flex justify-between space-x-2">
        <div className="text-sm text-slate-500">
          <span className="font-medium text-slate-600">2</span> of <span className="font-medium text-slate-600">67</span> comments
        </div>
        <button className="text-sm  font-medium text-indigo-500 hover:text-indigo-600">View More Comments</button>
      </div> */}
    </div>
  )
}
// const mapStateToProps = state => ({
//   auth: state.auth,
//   feed: state.feed,
//   comment: state.comment
// })
// const mapDispatchToProps = dispatch => ({

// })

export default Comments;