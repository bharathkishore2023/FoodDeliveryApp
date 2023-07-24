import { firestore } from "../firebase.config"
import {
    collection,
    doc,
    orderBy,
    setDoc,
    getDocs,
    query
} from "firebase/firestore"
//saving new Item
export const saveItem=async(data)=>{
    await setDoc(doc(firestore,'foodItems', `${Date.now()}`),data,{
        merge:true,
    }
    );
};

//getall item food items
export const getAllFoodItems =async()=>{
    const items=await getDocs(
        query(collection(firestore,"foodItems"),orderBy("id","desc"))
    );
    return items.docs.map((doc)=>doc.data())
}
