import React from "react"
import Nav from "../components/Nav/index"
import List from "../components/List/index"
import Form from "../components/Form/index"
const Thp =() =>
{
    return (
        <div className="grid md:grid-cols-12">
        <Nav/>
        <main className="md:col-span-6">
        <List/>
        </main>
        <Form/>
        </div>
    )
}
export default Thp