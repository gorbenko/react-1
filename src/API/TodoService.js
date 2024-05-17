import axios from 'axios'

export default class TodoService {
    static async getAll() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}