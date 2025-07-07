import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-6">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="space-y-3">
          <h2 className="font-black text-3xl">Menu</h2>
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm
            tip={tip}
            setTip={setTip}
          />

          <OrderTotals 
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />

        </div>
      </main>
    </>
  )
}

export default App
