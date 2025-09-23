
import './App.css'
import ProfileCard from './components/card.jsx'

function App() {
  let obj = {
    name: "om" , 
    age:22
  }

  return (
    <>
    <div class="mt-20 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-5">
  <img class="w-full h-48 object-cover" src="https://picsum.photos/600/400" alt="cover" />
  {/* React m img tag ko / isse close krna padta h nhi to error dega */}
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">Card title</h3>
    <p class="text-gray-600 text-sm mb-4">
      Short description or subtitle — one or two lines to describe the content.
    </p>
    <div class="flex items-center justify-between ">
      <span class="text-indigo-600 font-medium">Learn more →</span>
      <div class="text-sm text-gray-500 ">· 2 min read</div>
    </div>
  </div>
</div>

    {/* ese pass krte h object string ko aur array ko object jaise hi pass kr skte h
    /* <ProfileCard name = "Dua lipa" someobj= {obj} /> 
    abhi simple rkhne ke liye ek hi prop pass kr rhe h
    */}
    <ProfileCard name="Ana lady" btntext="Follow me"/>
    <ProfileCard name="Dua Lipa" btntext= "Follow"/>
    <ProfileCard />
    
    </>

     )
    
    }

export default App
