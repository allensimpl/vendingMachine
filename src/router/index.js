import Vending from "../containers/user";
import { Routes, Route, Navigate } from "react-router-dom";
import { Front } from "../containers/front";
import { Bill } from "../containers/bill";
import {Cart} from 
import Locations from "../locations";

export const Router = () => {
	return (
		<Routes>
			<Route path={Locations.DASHBOARD} element={<Front />}>
				<Route path={Locations.CART} element = {<Vending />}/>
				<Route path={Locations.BILL} element={<Bill/>}/>
				<Route path="*" element={<Navigate to={Locations.DASHBOARD} replace />}/>
			</Route>
		</Routes>
	);
};