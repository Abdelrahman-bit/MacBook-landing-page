import data from "../data";
import Card from "./Card";
function Testimonials() {
    const {users} = data;
  return <div className='bg-[#010409] w-full grid grid-flow-row-dense gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 py-20'>
    {users.map((user)=> <Card key={user.id} user={user} />)}
  </div>;
}

export default Testimonials