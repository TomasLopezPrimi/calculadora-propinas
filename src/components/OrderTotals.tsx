import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subtotalAmount = useMemo( () => order.reduce((total: OrderItem["price"], item: OrderItem) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

  return (
    <>
    <div className="space-y-3">
        <h2 className="font-black text-2x1"> Totales y propina </h2>
        <p>Subtotal a pagar: {" "}
            <span> {formatCurrency(subtotalAmount)} </span>
        </p>
        <p>Propina: {" "}
            <span> {formatCurrency(tipAmount)} </span>
        </p>
        <p>Subtotal a pagar: {" "}
            <span> {formatCurrency(subtotalAmount + tipAmount)} </span>
        </p>

    </div>

    <button 
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={subtotalAmount === 0}
        onClick={placeOrder}
        >
        Guardar orden
    </button>
    </>
  )
}
