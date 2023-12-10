import Button from "../../ui/Button.jsx";
import {useFetcher} from "react-router-dom";
import {updateOrder} from "../../services/apiRestaurant.js";

// eslint-disable-next-line no-unused-vars,react/prop-types
const UpdateOrder = ({order}) => {
    const fetcher = useFetcher()
    return (
        <fetcher.Form method="PATCH" className='text-right'>
            <Button type='prymary'>Make priority</Button>
        </fetcher.Form>
    );
};

export default UpdateOrder;

// eslint-disable-next-line no-unused-vars
export async function action({request, params}) {
    const data = {priority: true}
    await updateOrder(params.orderId, data)
    return null
}