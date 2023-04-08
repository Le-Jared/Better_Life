import axios from 'axios';

export default function MedicineDeleteButton({ setMedicines, medicine, BASE_URL }) {
    // Handle click event for deleting a medicine
    const handleDeleteClick = async (id) => {
        const token = localStorage.getItem("token");
        try {

        await axios.delete(`/api/stock/${id}`, {
            headers: {
            "Content-Type": "application/json",
            },
            Authorization: `Bearer ${token}`,
        });

        await axios.delete(`${BASE_URL}/${id}`, {
            headers: {
            "Content-Type": "application/json",
            },
            Authorization: `Bearer ${token}`,
        });

        setMedicines((prevMedicines) => prevMedicines.filter((m) => m._id !== id));
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <td>
            <button onClick={() => handleDeleteClick(medicine._id)}>Delete</button>
        </td>
    )
}