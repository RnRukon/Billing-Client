
import { toast } from 'react-toastify';
export const Alert = ({ title, type }) => toast(title, {
    type: type
});

