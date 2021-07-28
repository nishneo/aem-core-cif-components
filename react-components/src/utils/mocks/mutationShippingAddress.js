/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import MUTATION_SET_SHIPPING_ADDRESS from '../../queries/mutation_set_shipping_address.graphql';
import mockShippingAddress from './mockShippingAddress';

export default {
    request: {
        query: MUTATION_SET_SHIPPING_ADDRESS,
        variables: {
            cartId: null,
            city: mockShippingAddress.city,
            company: mockShippingAddress.company,
            country_code: mockShippingAddress.country_code,
            firstname: mockShippingAddress.firstname,
            lastname: mockShippingAddress.lastname,
            postcode: mockShippingAddress.postcode,
            region_code: mockShippingAddress.region_code,
            save_in_address_book: mockShippingAddress.save_in_address_book,
            street: mockShippingAddress.street,
            telephone: mockShippingAddress.telephone
        }
    },
    result: {
        data: {
            cart: {
                shipping_addresses: [
                    {
                        available_shipping_methods: [
                            {
                                carrier_code: 'test carrier code',
                                carrier_title: 'test carrier title',
                                method_code: 'test method code',
                                method_title: 'test method title'
                            }
                        ],
                        city: mockShippingAddress.city,
                        company: mockShippingAddress.company,
                        country: {
                            code: mockShippingAddress.country_code
                        },
                        firstname: mockShippingAddress.firstname,
                        lastname: mockShippingAddress.lastname,
                        postcode: mockShippingAddress.postcode,
                        region: {
                            code: mockShippingAddress.region_code
                        },
                        street: mockShippingAddress.street,
                        telephone: mockShippingAddress.telephone
                    }
                ]
            }
        }
    }
};
