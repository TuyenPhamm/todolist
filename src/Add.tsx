import axios from 'axios';
import { useState } from 'react';

interface myState{
    name : string,
    Address : string,
    Age : string|number}

function Add() {
    const [data, setData] = useState<myState>({
        name: "",
        Address: "",
        Age: '', // sửa giá trị mặc định cho Age thành 0
    });

    const addMember = (e: React.FormEvent<HTMLFormElement>  ) => {
        e.preventDefault()
        axios.post('https://6426e0f4556bad2a5b5a5611.mockapi.io/prj/Todolist_tc', {
            name: data.name,
            Address: data.Address,
            Age: data.Age,
        }).then((res)=>console.log(res.data))
    }



    const hand = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData: myState = {...data};
        newData[e.target.id as keyof myState] = e.target.value;
        setData(newData);
    }

    return (
        <form onSubmit={(e)=> addMember(e)}>
            <div>
                <span>Name</span>
                <input
                    value={data.name}
                    onChange={(e) => hand(e)}
                    id='name'
                />
            </div>
            <div>
                <span>Address</span>
                <input
                    value={data.Address}
                    onChange={(e) => hand(e)}
                    id='Address'
                />
            </div>
            <div>
                <span>Age</span>
                <input
                    value={data.Age}
                    onChange={(e) => hand(e)}
                    id='Age' />

            </div>
        <input type={'submit'}/>
        </form>
    );
    
}

export default Add;