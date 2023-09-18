import { LineChart as LcChart, Line } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, student: "Student 1", math: 85, bangla: 70, english: 78 },
        { id: 2, student: "Student 2", math: 90, bangla: 75, english: 80 },
        { id: 3, student: "Student 3", math: 78, bangla: 65, english: 72 },
        { id: 4, student: "Student 4", math: 92, bangla: 85, english: 88 },
        { id: 5, student: "Student 5", math: 88, bangla: 72, english: 79 },
        { id: 6, student: "Student 6", math: 95, bangla: 88, english: 90 },
        { id: 7, student: "Student 7", math: 82, bangla: 69, english: 75 },
        { id: 8, student: "Student 8", math: 89, bangla: 76, english: 81 },
        { id: 9, student: "Student 9", math: 91, bangla: 80, english: 84 },
        { id: 10, student: "Student 10", math: 87, bangla: 74, english: 78 },
      ];
      
      
    return (
        <div className='ml-10 mt-10'>
            <LcChart width={400} height={400} data={studentMarks}>
                    <Line dataKey='bangla' stroke='red'></Line>
                    <Line dataKey='english' stroke='blue'></Line>
                    <Line dataKey='math' stroke='green'></Line>
            </LcChart>
        </div>
    );
};

export default LineChart;