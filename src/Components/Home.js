import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import './Home.css'
import Animal from "./Animal/Animal"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Paging from "./Paging/Paging.js"
import { useEffect, useMemo, useState } from "react"
import animalAPI from "../API/animalAPI"

const Home = () =>{
    const user = useSelector(state => state.user.user)
    const history = useHistory();

    const [page, setPage] = useState(1)
    // Mỗi trang có 36 item
    const itemInPage = 36;
    
    const [listAnimal, setListAnimal] = useState([])
    useEffect(async()=>{
        try{
            const response = await animalAPI.getAll()
            setListAnimal(response)
        }catch{
            console.log("error API")
        }
    },[])

    //Số trang
    const sumPage = Math.ceil((listAnimal.length / itemInPage));
    //Danh sách animal của trang hiện tại
    const [listAnimalToPage, setListAnimalToPage] = useState([]);

    useEffect(()=>{
        setListAnimalToPage(
            listAnimal.slice(
                (page -1) * itemInPage, (page - 1) * itemInPage + itemInPage
            )
        )
    },[page, listAnimal])
    


    if(user == null) history.push('/login')

    return(
        <div>
            <Header name={user}/>
            <div className="main">
                <div className="banner">
                    <img src="https://topicanative.edu.vn/wp-content/uploads/2019/12/dong-vat-bang-tieng-anh.jpg"></img>
                </div>
        
                <Animal listAnimal={listAnimalToPage}/>
                <Paging paging={[...Array(sumPage)]} setPage={setPage} page={page}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Home

