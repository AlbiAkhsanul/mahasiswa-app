<template>
    <div class="table-container">
        <h1>Daftar Mahasiswa</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Tahun</th>
                    <th>IPK</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.year }}</td>
                    <td>{{ student.ipk }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'StudentTable',
    data() {
        return {
            students: []
        };
    },
    mounted() {
        axios.get('https://api-coba-lumen-production.up.railway.app/student')
            .then(response => {
                this.students = response.data.data;
                console.log(this.student);
            })
            .catch(error => {
                console.error('Gagal fetch data:', error);
            });
    }
};
</script>

<style scoped>
.table-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

table {
    border-collapse: collapse;
    width: 80%;
    max-width: 800px;
    margin-top: 20px;
}

th,
td {
    padding: 8px 12px;
    text-align: left;
}
</style>
