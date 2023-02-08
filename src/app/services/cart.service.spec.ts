import { TestBed } from '@angular/core/testing';
import { CheckoutFormComponent } from '../components/checkout-form/checkout-form.component';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFormComponent]
    });
    service = TestBed.inject(CartService);
    service.emptyCart();

    service.addToCart({
      id: 10,
      quantity: 2,
      name: 'Doll',
      url: 'http://doll',
      price: 5,
      description: 'test doll'
    });

    service.addToCart({
      id: 11,
      quantity: 3,
      name: 'Dummy knife',
      url: 'http://knife',
      price: 2,
      description: 'fake cuts'
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('index() return an array', () => {
    expect(service.index()).toBeInstanceOf(Array);
  });

  it('should add to cart', () => {
    expect(service.index()).toEqual([
      {
        id: 10,
        quantity: 2,
        name: 'Doll',
        url: 'http://doll',
        price: 5,
        description: 'test doll'
      },
      {
        id: 11,
        quantity: 3,
        name: 'Dummy knife',
        url: 'http://knife',
        price: 2,
        description: 'fake cuts'
      }
    ]);
  });

  it('emptyCart() should empty cart', () => {
    service.emptyCart();

    expect(service.index()).toEqual([]);
  });

  it('calculateCost() should return cost without parameter', () => {
    expect(service.calculateCost()).toBe(16);
  });

  it('calculateCost() should return cost with parameter', () => {
    expect(
      service.calculateCost({
        id: 11,
        quantity: 2,
        name: 'Dummy knife',
        url: 'http://knife',
        price: 2,
        description: 'fake cuts'
      })
    ).toBe(14);
  });

  it('calculateCost() should remove item with quantity 0', () => {
    service.calculateCost({
      id: 11,
      quantity: 0,
      name: 'Dummy knife',
      url: 'http://knife',
      price: 2,
      description: 'fake cuts'
    });

    expect(service.index()).toEqual([
      {
        id: 10,
        quantity: 2,
        name: 'Doll',
        url: 'http://doll',
        price: 5,
        description: 'test doll'
      }
    ]);
  });

  it('removeFromCart() should remove item from Cart', () => {
    service.removeFromCart(10);

    expect(service.index()).toEqual([
      {
        id: 11,
        quantity: 3,
        name: 'Dummy knife',
        url: 'http://knife',
        price: 2,
        description: 'fake cuts'
      }
    ]);
  });

  it('findCartItemIndex() should find the index of a cartItem', () => {
    expect(service.findCartItemIndex(service.index(), 10)).toEqual(0);
  });
});
