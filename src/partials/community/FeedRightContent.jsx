import React from 'react';

import GroupAvatar01 from '../../images/group-avatar-01.png';
import GroupAvatar02 from '../../images/group-avatar-02.png';
import GroupAvatar03 from '../../images/group-avatar-03.png';
import GroupAvatar04 from '../../images/group-avatar-04.png';
import UserImage01 from '../../images/user-32-01.jpg';
import UserImage02 from '../../images/user-32-02.jpg';
import UserImage04 from '../../images/user-32-04.jpg';
import UserImage05 from '../../images/user-32-05.jpg';

function FeedRightContent() {
  return (
    <div className="w-full hidden xl:block xl:w-72 relative">
      <div className="md:py-2 " >
        {/* Search form */}
        <div className="lg:sticky lg:top-36 lg:h-[calc(100vh-64px)] lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
          {/* Blocks */}
          <div className="space-y-4 flex-column mt-4">
            {/* Block 1 */}
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="text-xs font-semibold text-slate-400 uppercase mb-4">Top Communities</div>
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={GroupAvatar01} width="32" height="32" alt="Group 01" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">Introductions</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Join
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={GroupAvatar02} width="32" height="32" alt="Group 02" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">HackerNews</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Join
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={GroupAvatar03} width="32" height="32" alt="Group 03" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">ReactJs</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                      </svg>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={GroupAvatar04} width="32" height="32" alt="Group 04" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">JustChatting</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Join
                    </button>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="text-xs font-semibold text-slate-400 uppercase mb-4">Who to follow</div>
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={UserImage02} width="32" height="32" alt="User 02" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">Elly Boutin</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Follow
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={UserImage04} width="32" height="32" alt="User 04" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">Rich Harris</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Follow
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={UserImage05} width="32" height="32" alt="User 05" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">Mary Porzio</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Follow
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={UserImage01} width="32" height="32" alt="User 01" />
                      </div>
                      <div className="truncate">
                        <span className="text-sm font-medium text-slate-800">Brian Lovin</span>
                      </div>
                    </div>
                    <button className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      Follow
                    </button>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="text-xs font-semibold text-slate-400 uppercase mb-4">Trends for you</div>
              <ul className="space-y-3">
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800" href="#0">
                      Tracking your website traffic on launch day 📈
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">248 comments</div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800" href="#0">
                      Freemium model questions
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">47 comments</div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800" href="#0">
                      Slack and Community
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">24 comments</div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800" href="#0">
                      Who owns user onboarding in your company?
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">17 comments</div>
                </li>
                <li>
                  <div className="text-sm mb-1">
                    <a className="font-medium text-slate-800" href="#0">
                      Questions from a very confused Web3 startup founder 🤔
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">9 comments</div>
                </li>
              </ul>
              <div className="mt-4">
                <button className="btn-sm w-full bg-white border-slate-200 hover:border-slate-300 text-indigo-500 shadow-none">View All</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedRightContent;
