// export default function Custom404() {
//     return <h1>404 - Page Not Found</h1>
// }
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RedirectPage: NextPage = () => {
  const router = useRouter();

  let newPath: string = '/';
  switch(router.asPath) {
    case '/result.html': newPath= '/case'; break;
    case '/result/case5_large_joint_funeral_entertainment.html': newPath= '/case/goudousou/001'; break;
    case '/result/case6_large_joint_funeral_real_estate.html': newPath= '/case/goudousou/002'; break;
    case '/result/case7_medium_small_joint_funeral_mechanical.html': newPath= '/case/goudousou/003'; break;
    case '/result.html': newPath= '/case'; break;
    case '/result/case3_large_farewell_system_development.html': newPath= '/case/owakarenokai/001'; break;
    case '/result/case2_large_farewell_kindergarten.html': newPath= '/case/owakarenokai/002'; break;
    case '/result/case4_medium_small_farewell_electronics.html': newPath= '/case/owakarenokai/003'; break;
    case '/result.html': newPath= '/case'; break;
    case '/result/case8_large_funeral_supermarket.html': newPath= '/case/syasou/001'; break;
    case '/result/case10_large_joint_funeral_entertainment.html': newPath= '/case/syasou/002'; break;
    case '/result/case11_medium_small_funeral_interior_decoration.html': newPath= '/case/syasou/003'; break;
    case '/company.html': newPath= '/company'; break;
    case '/demand.html': newPath= '/contact/form'; break;
    case '/consult.html': newPath= '/contact/syasou-desk'; break;
    case '/knowledge.html': newPath= '/faq'; break;
    case '/media/category/company_funeral': newPath= '/faq/about'; break;
    case '/media/category/manner': newPath= '/faq/manner'; break;
    case '/media/2017/03/07/12': newPath= '/faq/manner/001'; break;
    case '/media/2017/03/06/13': newPath= '/faq/manner/002'; break;
    case '/media/2017/03/05/14': newPath= '/faq/manner/003'; break;
    case '/media/2017/03/04/50': newPath= '/faq/manner/004'; break;
    case '/media/2017/03/03/16': newPath= '/faq/manner/005'; break;
    case '/media/2017/03/02/17': newPath= '/faq/manner/006'; break;
    case '/media/2017/03/01/18': newPath= '/faq/manner/007'; break;
    case '/media/category/preparation': newPath= '/faq/prepare'; break;
    case '/media/category/reference': newPath= '/faq/reference'; break;
    case '/media/2017/03/13/3': newPath= '/faq/reference/001'; break;
    case '/media/2017/03/12/2': newPath= '/faq/reference/002'; break;
    case '/media/2017/03/11/1': newPath= '/faq/reference/003'; break;
    case '/media/2017/03/09/5': newPath= '/faq/reference/004'; break;
    case '/media/2017/03/08/6': newPath= '/faq/reference/005'; break;
    case '/media/2017/03/07/7': newPath= '/faq/reference/006'; break;
    case '/media/2017/03/06/10': newPath= '/faq/reference/007'; break;
    case '/media/2017/03/04/11': newPath= '/faq/reference/008'; break;
    case '/media/2017/03/03/49': newPath= '/faq/reference/009'; break;
    case '/media/2017/03/02/8': newPath= '/faq/reference/010'; break;
    case '/media/category/ceremore_funeral': newPath= '/faq/syasou'; break;
    case '/media/category/passing_away': newPath= '/faq/until'; break;
    case '/combination.html': newPath= '/plan/goudousou'; break;
    case '/separation.html': newPath= '/plan/owakarenokai'; break;
    case '/ceremony.html': newPath= '/plan/syasou'; break;
    case '/premiumpac.html': newPath= '/plan/syasou-premiumpack'; break;
    case '/premiumpac_1000.html': newPath= '/plan/syasou-premiumpack/1000m'; break;
    case '/premiumpac_250.html': newPath= '/plan/syasou-premiumpack/250m'; break;
    case '/premiumpac_400.html': newPath= '/plan/syasou-premiumpack/400m'; break;
    case '/premiumpac_600.html': newPath= '/plan/syasou-premiumpack/600m'; break;
    case '/premiumpac_800.html': newPath= '/plan/syasou-premiumpack/800m'; break;
    case '/cost.html': newPath= '/price'; break;
    case '/seminar.html': newPath= '/seminar'; break;
    case '/place.html': newPath= '/sougijou'; break;
    case '/result/case4_medium_small_farewell_electronics.html': newPath= '/sougijou/hotel/39'; break;
    case '/result/case3_large_farewell_system_development.html': newPath= '/sougijou/hotel/54'; break;
    case '/place/zoujyouji.html': newPath= '/sougijou/shikijou/1'; break;
    case '/place/kunitachi.html': newPath= '/sougijou/shikijou/18'; break;
    case '/place/kaneiji.html': newPath= '/sougijou/shikijou/2'; break;
    case '/place/tamagawajosui.html': newPath= '/sougijou/shikijou/21'; break;
    case '/place/higashiyamato.html': newPath= '/sougijou/shikijou/22'; break;
    case '/place/akishima.html': newPath= '/sougijou/shikijou/23'; break;
    case '/place/hachioji.html': newPath= '/sougijou/shikijou/25'; break;
    case '/place/katakura.html': newPath= '/sougijou/shikijou/26'; break;
    case '/place/gokokuji.html': newPath= '/sougijou/shikijou/3'; break;
    case '/place/sakado.html': newPath= '/sougijou/shikijou/31'; break;
    case '/place/tukijihonganji.html': newPath= '/sougijou/shikijou/4'; break;
    case '/place/housenji.html': newPath= '/sougijou/shikijou/5'; break;
    case '/place/tachikawakaikan.html': newPath= '/sougijou/shikijou/6'; break;
    case '/place/baisoin.html': newPath= '/sougijou/shikijou/9'; break;
    case '/confidence.html': newPath= '/'; break;
    case '/sitemap.html': newPath= ''; break;
    case '/entry.html': newPath= '/contact/form?mode=3'; break;
    case '/seminar/seminar_2203-04.html#content': newPath= '/seminar/220913'; break;
    case '/seminar/seminar_2203-04.html': newPath= '/seminar/220913'; break;
    case '/seminar/seminar_200416.html': newPath= '/seminar'; break;
    case '/seminar/seminar_200318.html': newPath= '/seminar'; break;
    case '/seminar/seminar_191113.html': newPath= '/seminar'; break;
    case '/seminar/seminar_191017.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190918.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190718.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190711.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190522.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190417.html': newPath= '/seminar'; break;
    case '/seminar/seminar_190313.html': newPath= '/seminar'; break;
    case '/media/2017/07/24/140': newPath= '/faq/syasou/001'; break;
    case '/media/2017/07/24/139': newPath= '/faq/syasou/002'; break;
    case '/media/2017/07/24/138': newPath= '/faq/syasou/003'; break;
    case '/media/2017/07/24/123': newPath= '/faq/syasou/004'; break;
    case '/media/2017/07/24/134': newPath= '/faq/prepare/001'; break;
    case '/media/2017/07/24/129': newPath= '/faq/prepare/002'; break;
    case '/media/2017/07/24/122': newPath= '/faq/prepare/003'; break;
    case '/media/2017/07/24/121': newPath= '/faq/prepare/004'; break;
    case '/media/2017/07/24/120': newPath= '/faq/prepare/005'; break;
    case '/media/2017/07/24/119': newPath= '/faq/prepare/006'; break;
    case '/media/2017/07/24/118': newPath= '/faq/prepare/007'; break;
    case '/media/2017/07/24/117': newPath= '/faq/prepare/008'; break;
    case '/media/2017/07/21/112': newPath= '/faq/prepare/009'; break;
    case '/media/2017/07/21/110': newPath= '/faq/prepare/010'; break;
    case '/media/2017/07/21/107': newPath= '/faq/prepare/011'; break;
    case '/media/2017/07/21/104': newPath= '/faq/prepare/012'; break;
    case '/media/2017/07/21/102': newPath= '/faq/prepare/013'; break;
    case '/media/2017/07/21/99': newPath= '/faq/prepare/014'; break;
    case '/media/2017/07/24/137': newPath= '/faq/until/001'; break;
    case '/media/2017/07/24/136': newPath= '/faq/until/002'; break;
    case '/media/2017/07/24/135': newPath= '/faq/until/003'; break;
    case '/media/2017/07/24/133': newPath= '/faq/until/004'; break;
    case '/media/2017/07/24/132': newPath= '/faq/until/005'; break;
    case '/media/2017/07/24/131': newPath= '/faq/until/006'; break;
    case '/media/2017/07/24/130': newPath= '/faq/until/007'; break;
    case '/media/2017/07/24/128': newPath= '/faq/until/008'; break;
    case '/media/2017/07/24/126': newPath= '/faq/until/009'; break;
    case '/media/2017/07/24/125': newPath= '/faq/until/010'; break;
    case '/media/2017/07/24/124': newPath= '/faq/until/011'; break;
    case '/media/2017/07/21/100': newPath= '/faq/until/012'; break;
    case '/media/2017/07/24/141': newPath= '/faq/about/001'; break;
    case '/media/2017/07/21/113': newPath= '/faq/about/002'; break;
    case '/media/2017/07/21/111': newPath= '/faq/about/003'; break;
    case '/media/2017/07/21/109': newPath= '/faq/about/004'; break;
    case '/media/2017/07/21/108': newPath= '/faq/about/005'; break;
    case '/media/2017/07/21/106': newPath= '/faq/about/006'; break;
    case '/media/2017/07/21/105': newPath= '/faq/about/007'; break;
    case '/media/2017/07/21/103': newPath= '/faq/about/008'; break;
    case '/media/2017/07/21/101': newPath= '/faq/about/009'; break;
    case '/about.html': newPath= '/beginner/syasou'; break;
    case '/about/large.html': newPath= '/case'; break;
    case '/about/middle.html': newPath= '/case'; break;
    case '/preparation.html': newPath= '/beginner/syasou'; break;
    case '/correspondence.html': newPath= '/beginner/syasou'; break;
    case '/funeral.html': newPath= '/beginner/syasou'; break;
    case '/type.html': newPath= '/beginner/syasou'; break;
    case '/cost/cost_item.html': newPath= '/price'; break;
    case '/cost/cost_handling.html': newPath= '/price'; break;
    case '/place/aoyama.html': newPath= '/sougijou'; break;

    case '/beginner': newPath= '/beginner/syasou'; break;
  }

  useEffect(() => {
    router.replace(newPath);
  }, [router]);
  return <></>;
}
export default RedirectPage
