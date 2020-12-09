import React, { Component } from 'react';

const ItemContext = React.createContext()

class ItemProvider extends Component {

    state={
        items: [],
        singleItem: [],
        cart: [],
        cartTotal: 0,
        filtered: "",
        searchTerm: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(data => this.setState({ items: data}))
    }

    setItems = () => {
        let tempItems = []
        this.state.items.forEach(item =>{
            const singleItem = {...item}
            tempItems = [...tempItems, item]
        })
        this.setState(() => {
            return{singleItem: tempItems}
        })
    }

    findItem = (id) => {
        const item = this.state.items.find(item => item.id === id)
        return item 
    }

    handleItemInfo = (id) => {
        const item = this.findItem(id)
        this.setState(() => {
            return {singleItem: item}
        })
    }

    addToCart = (id) => {
        let tempItems = [...this.state.items]
        const index = tempItems.indexOf(this.findItem(id))
        const item = tempItems[index]
        const price = item.price
        item.total = price

        this.setState(() => {
            return {items: tempItems, cart:[...this.state.cart, item]}
        }, () => {this.addTotals()})
        
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedItem = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedItem)
        const item = tempCart[index]

        item.amount = item.amount + 1
        item.total = item.amount * item.price


        this.setState(() => {
            return{cart:[...tempCart]}}, 
            () => {
               this.addTotals() 
            })

    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedItem = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedItem)
        const item = tempCart[index]
        item.amount = item.amount - 1

        if(item.amount === 0 ){
            this.removeItem(id)
        }
        else {
            item.total = item.amount * item.price
            this.setState(() => {
                return  {cart:[...tempCart]}}, 
                () => {
                   this.addTotals() 
                })
        }
    }

    removeItem = (id) => {
        let tempItems = [...this.state.items]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id )

        const index = tempItems.indexOf(this.findItem(id))
        let removedItem = tempItems[index]
        removedItem.amount = 0
        removedItem.total = 0

        this.setState(() => {
            return {
                cart: [...tempCart],
                items: [...tempItems]
            }
        }, () => {
            this.addTotals()
        })
    }

    clearCart = () => {
       this.setState(() => {
           return { cart: [] }
       }, () => {
           this.setItems()
           this.addTotals()
       })
    }

    addTotals = () => {
        let currentTotal = 0
        this.state.cart.map(item => currentTotal += item.total)
        this.setState(() => {
            return {
                cartTotal: currentTotal
            }
        })
    }

    filterItems = (type) => {
        this.setState({filtered: type})
    }

    searchFor = (term) => {
        this.setState({searchTerm: term})
    }

    render() {
        return (
            <>
            <ItemContext.Provider value={{
                    ...this.state, 
                    handleItemInfo: this.handleItemInfo,
                    addToCart: this.addToCart,
                    openModal:this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    filterItems: this.filterItems,
                    searchFor: this.searchFor
                }}>
                {this.props.children}
            </ItemContext.Provider>
            </>
        );
    }
}

const ItemConsumer = ItemContext.Consumer


export default ItemProvider;
export { ItemProvider, ItemConsumer }