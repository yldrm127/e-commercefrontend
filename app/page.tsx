
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./sidebar/page"
import Article from "./article/page"
export default function Home() {
  return (
<div className='row m-3'> 
<Sidebar/>
<Article/>
</div>
  )
 
}
