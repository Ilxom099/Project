import {collection, getDocs, doc, getDoc, deleteDoc, addDoc, updateDoc} from "firebase/firestore";
import {db} from './config';

async function call(entity){
    const postCollectionRef = collection(db, entity);
    const res = await getDocs(postCollectionRef);
    return res.docs.map(item => ({id: item.id, ...item.data()}));
}
async function remove(entity,id){
    const oneElement = doc(db, entity, id);
    return await deleteDoc(oneElement);
}
async function save(entity,data){
    const postCollectionRef = collection(db, entity);
    return await addDoc(postCollectionRef,data);
}
async function edit(entity,data){
    const oneElement = doc(db, entity, data.id)
    return await updateDoc(oneElement,data);
}
export default {call, remove, save, edit};