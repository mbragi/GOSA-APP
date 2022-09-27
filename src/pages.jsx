// Import pages
import Home from './pages/home/Home';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Fintech from './pages/Fintech';
import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Invoices from './pages/ecommerce/Invoices';
import Shop from './pages/ecommerce/Shop';
import Shop2 from './pages/ecommerce/Shop2';
import Product from './pages/ecommerce/Product';
import Cart from './pages/ecommerce/Cart';
import Cart2 from './pages/ecommerce/Cart2';
import Cart3 from './pages/ecommerce/Cart3';
import Pay from './pages/ecommerce/Pay';
import Campaigns from './pages/Campaigns';
import UsersTabs from './pages/community/UsersTabs';
import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';
import Feed from './pages/community/Feed';
import Forum from './pages/community/Forum';
import ForumPost from './pages/community/ForumPost';
import Meetups from './pages/community/Meetups';
import MeetupsPost from './pages/community/MeetupsPost';
import CreditCards from './pages/finance/CreditCards';
import Transactions from './pages/finance/Transactions';
import TransactionDetails from './pages/finance/TransactionDetails';
import JobListing from './pages/job/JobListing';
import JobPost from './pages/job/JobPost';
import CompanyProfile from './pages/job/CompanyProfile';
import Messages from './pages/Messages';
import TasksKanban from './pages/tasks/TasksKanban';
import TasksList from './pages/tasks/TasksList';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import KnowledgeBase from './pages/utility/KnowledgeBase';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';

import routes from './routes';
import Gallery from './pages/gallery/Gallery';
// import Feed from './pages/feed/feed';
// import Main from './pages/haveAnIdea/main';
// import Phase02 from './pages/haveAnIdea/Phase02';
// import Phase03 from './pages/haveAnIdea/Phase03';
// import Finished from './pages/haveAnIdea/Done.jsx';
// import Video from './pages/videoPlayer';
// import StudentMain from './pages/becomeAStudent/StudentMain';
// import StudentPath from './pages/becomeAStudent/StudentPath';




const pages = [
  { path: routes.home, element: <Home /> },
  { path: routes.gallery, element: <Gallery /> },
  { path: routes.feed, element: <Feed /> },

  {/*{ path: routes.haveAnIdea, element: <Main /> },
  { path: routes.haveAnIdea02, element: <Phase02 /> },
  { path: routes.haveAnIdea03, element: <Phase03 /> },
  { path: routes.haveAnIdea04, element: <Finished /> },
  { path: routes.haveAnIdea04, element: <Finished /> },
  { path: routes.studentMain, element: <StudentMain /> },
{ path: routes.studentPath, element: <StudentPath /> },*/},


  // { path: routes.home, element: <Dashboard /> },
  { path: routes.dashBoardAnalytics, element: <Analytics /> },
  { path: routes.dashBoardFintech, element: <Fintech /> },
  { path: routes.ecommerceCustomers, element: <Customers /> },
  { path: routes.ecommerceOrders, element: <Orders /> },
  { path: routes.ecommerceInvoices, element: <Invoices /> },
  { path: routes.ecommerceShop, element: <Shop /> },
  { path: routes.ecommerceShop2, element: <Shop2 /> },
  { path: routes.ecommerceProduct, element: <Product /> },
  { path: routes.ecommerceCart, element: <Cart /> },
  { path: routes.ecommerceCart2, element: <Cart2 /> },
  { path: routes.ecommerceCart3, element: <Cart3 /> },
  { path: routes.ecommercePay, element: <Pay /> },
  { path: routes.campaigns, element: <Campaigns /> },
  { path: routes.communityUsersTabs, element: <UsersTabs /> },
  { path: routes.communityUsersTiles, element: <UsersTiles /> },
  { path: routes.communityProfile, element: <Profile /> },
  { path: routes.communityFeed, element: <Feed /> },
  { path: routes.communityForum, element: <Forum /> },
  { path: routes.communityForumPost, element: <ForumPost /> },
  { path: routes.communityMeetups, element: <Meetups /> },
  { path: routes.communityMeetupsPost, element: <MeetupsPost /> },
  { path: routes.financeCards, element: <CreditCards /> },
  { path: routes.financeTransactions, element: <Transactions /> },
  { path: routes.financeTransactionDetails, element: <TransactionDetails /> },
  { path: routes.jobListing, element: <JobListing /> },
  { path: routes.jobPost, element: <JobPost /> },
  { path: routes.jobCompanyProfile, element: <CompanyProfile /> },
  { path: routes.messages, element: <Messages /> },
  { path: routes.tasksKanban, element: <TasksKanban /> },
  { path: routes.taskList, element: <TasksList /> },
  { path: routes.inbox, element: <Inbox /> },
  { path: routes.calendar, element: <Calendar /> },
  { path: routes.settingsAccount, element: <Account /> },
  { path: routes.settingsNotifications, element: <Notifications /> },
  { path: routes.settingsApps, element: <Apps /> },
  { path: routes.settingsPlans, element: <Plans /> },
  { path: routes.settingsBilling, element: <Billing /> },
  { path: routes.settingsFeedback, element: <Feedback /> },
  { path: routes.utilityChangelog, element: <Changelog /> },
  { path: routes.utilityRoadmap, element: <Roadmap /> },
  { path: routes.utilityFaqs, element: <Faqs /> },
  { path: routes.utilityEmptyState, element: <EmptyState /> },
  { path: routes.utility404, element: <PageNotFound /> },
  { path: routes.utilityKnowledgeBase, element: <KnowledgeBase /> },
  {/*{ path: routes.video, element: <Video /> }*/ },
  { path: routes.signin, element: <Signin /> },
  { path: routes.signup, element: <Signup /> },
  { path: routes.resetPassword, element: <ResetPassword /> },
  { path: routes.onBoarding01, element: <Onboarding01 /> },
  { path: routes.onBoarding02, element: <Onboarding02 /> },
  { path: routes.onBoarding03, element: <Onboarding03 /> },
  { path: routes.onBoarding04, element: <Onboarding04 /> },
  { path: routes.componentButton, element: <ButtonPage /> },
  { path: routes.componentForm, element: <FormPage /> },
  { path: routes.componentDropdown, element: <DropdownPage /> },
  { path: routes.componentAlert, element: <AlertPage /> },
  { path: routes.componentModal, element: <ModalPage /> },
  { path: routes.componentPagination, element: <PaginationPage /> },
  { path: routes.componentTabs, element: <TabsPage /> },
  { path: routes.componentBreadCrumb, element: <BreadcrumbPage /> },
  { path: routes.componentBadge, element: <BadgePage /> },
  { path: routes.componentAvatar, element: <AvatarPage /> },
  { path: routes.componentTooltip, element: <TooltipPage /> },
  { path: routes.componentAccordion, element: <AccordionPage /> },
  { path: routes.componentIcons, element: <IconsPage /> },
  { path: routes.notFound, element: <PageNotFound /> },
]


export default pages;