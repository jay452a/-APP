/**
 * Created by lenovo on 2018/2/1.
 */
const addressBookMain = () => import('@/views/addressBook/main.vue')
import linkNearly from '@/views/addressBook/linkNearly.vue'
import myOrganize from '@/views/addressBook/myOrganize.vue'
import myBranch from '@/views/addressBook/myBranch.vue'
import mobile from '@/views/addressBook/mobileAddressBook.vue'
import search from '@/views/addressBook/search.vue'
import detail from '@/views/addressBook/selfDetail.vue'
const route = [
  { path: '/addressBook',
    component: addressBookMain,
    children: [
      {
        path: '',
        redirect: '/addressBook/linkNearly'
      },
      {
        path: 'linkNearly',
        name: 'linkNearly',
        components: { linkNearly: linkNearly, myOrganize: myOrganize, myBranch: myBranch, mobile: mobile }
      },
      {
        path: 'myOrganize/:id',
        name: 'myOrganize',
        components: { linkNearly: linkNearly, myOrganize: myOrganize, myBranch: myBranch, mobile: mobile }
      },
      {
        path: 'myBranch',
        name: 'myBranch',
        components: { linkNearly: linkNearly, myOrganize: myOrganize, myBranch: myBranch, mobile: mobile }
      },
      {
        path: 'mobile',
        name: 'mobile',
        components: { linkNearly: linkNearly, myOrganize: myOrganize, myBranch: myBranch, mobile: mobile }
      },
      {
        path: 'search/:id',
        name: 'search',
        components: { search: search }
      }
    ]
  },
  {
    path: '/personDetail/:id',
    name: 'personDetail',
    component: detail
  }
]
export default route
