// export default function ProfileCard(props) {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-4">
//       <img
//         className="h-16 w-16 rounded-full object-cover"
//         src="https://i.pravatar.cc/150?img=32"
//         alt="avatar"
//       />
//       <div>
//         <h2 className="text-lg font-semibold">{props.name}</h2>
//         <p className="text-gray-500">Engineering Student</p>
//         <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//           Follow
//         </button>
//       </div>
//     </div>
//   );
// }


    // handling ka eg upar diya gya h iski jaroorat tab aai jab is profile card ke jaise bhut saare aur bhi card ho skte h jinme name differnt honge yahi se props ka concept aata h
    // note - baar baar props.username likhna lengty ho skta h to hum jahase props receive kr rhe h waha direct destructuring kr skte h
    // jaise neeche kiya h upar wale ki jgh

export default function ProfileCard({ name , btntext="Follow me guys"}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-4">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src="https://i.pravatar.cc/150?img=32"
        alt="avatar"
      />
      <div>
        <h2 className="text-lg font-semibold">{name || "xyz" }</h2>

        {/* upar humne or sign lgake default value likh di h esa bhi to ho skta h ki koi call krke props pass na kre to us case m default values show hongi 
            lekin ye readibility ke liye sahi nhi h isiliye args m hi default value bhi de skte h jaise upar args m kiya h*/}

        <p className="text-gray-500">Engineering Student</p>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        {btntext}
        </button>
      </div>
    </div>
  );
}
