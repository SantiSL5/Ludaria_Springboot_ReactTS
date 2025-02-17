import { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { Accordion } from "flowbite-react";
import dayjs from "dayjs";

interface ProfileProps {
    orders:any;
    user:any;
}

const ProfileComponent: React.FC<ProfileProps> = ({ orders, user }) => {

    return (
        <div>
            {user ? (
                <>
                    <div className="container mx-auto">
                        <div className="flex items-center space-x-4 mb-6 mt-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-16 h-16 rounded-full"
                                    src={user.data.photo}
                                    alt="User Avatar"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{user.data.username}</h2>
                                <p className="text-gray-600">{user.data.email}</p>
                            </div>
                        </div>
    
                        <div className="mb-5">
                            <h3 className="text-xl font-semibold mb-4">Historial de compras</h3>
                            <Accordion alwaysOpen={false}>
                                {orders.data.map((order:any) => (
                                <Accordion.Panel key={order.id}>
                                    <Accordion.Title className="font-semibold">
                                        Pedido nº{order.id} Fecha: {dayjs(order.createdAt).format("DD/MM/YYYY HH:mm")}
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <ul>
                                            {order.orderLines.map((orderLine: any) => (
                                                <li
                                                    key={orderLine.product.id}
                                                    className="flex items-center justify-between border-b py-3"
                                                >
                                                    <div className="flex items-center">
                                                        <img
                                                            src={`/assets/products/${orderLine.product.img}`}
                                                            alt={orderLine.product.name}
                                                            className="w-28 h-28 object-cover rounded-md"
                                                        />
                                                        <div className="ml-4">
                                                            <p className="font-semibold">{orderLine.product.name}</p>
                                                            <p className="text-gray-800 font-bold">
                                                                {orderLine.unitaryPrice} €
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center space-x-2">
                                                            <input
                                                                type="number"
                                                                value={orderLine.cant}
                                                                readOnly
                                                                min="1"
                                                                className="w-12 text-center border rounded-md"
                                                                style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                                                            />
                                                        </div>
                                                        <p className="text-gray-800 font-bold">
                                                            {(orderLine.unitaryPrice * orderLine.cant).toFixed(2)} €
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex justify-between items-center py-4 border-t font-semibold">
                                            <p>Total Artículos:</p>
                                            <p>{order.orderLines.reduce((total:any, item:any) => total + item.cant, 0)} artículos</p>
                                        </div>
                                        <div className="flex justify-between items-center py-4 font-semibold">
                                            <p>Total:</p>
                                            <p>{order.orderLines.reduce((total:any, item:any) => total + (item.unitaryPrice * item.cant), 0).toFixed(2)} €</p>
                                        </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};


export default ProfileComponent;