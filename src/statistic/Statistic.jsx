import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Smartphone', uv: 350, pv: 2400, amt: 2400},{name: 'Laptop', uv: 190, pv: 2400, amt: 2400},{name: 'Watch', uv: 270, pv: 2400, amt: 2400},{name: 'Airbuds', uv: 400, pv: 2400, amt: 2400},{name: 'Computer', uv: 110, pv: 2400, amt: 2400},{name: 'iPad', uv: 302, pv: 2400, amt: 2400}];
const Statistic = () => {
  return (
    <div>
      <div>
    <h1 className='text-center mt-10 font-bold text-4xl text-gray-600'>Our Product statistic</h1>
    <h1 className='text-center mt-4 mb-20 text-gray-600'>Your able to know about our product quantity by this chart</h1>
    
    <h1></h1>
      </div>
      <div className=''>
      <BarChart className='flex mx-auto' width={700} height={400} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={50} />
  </BarChart>
      </div>
    </div>
    
  );
};

export default Statistic;
