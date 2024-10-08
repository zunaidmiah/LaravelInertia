<script setup>
import AdminMainLayout from "@/Layouts/AdminMainLayout.vue";
import { Head } from "@inertiajs/vue3";
import Select from "primevue/select";
import Chart from "primevue/chart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
</script>

<template>
    <Head title="Dashboard" />

    <AdminMainLayout>
        <div class="p-6 text-gray-900">
            <div class="grid grid-cols-4 gap-5">
                <div
                    class="bg-white p-4 rounded-md shadow-sm flex items-center gap-20"
                >
                    <div>
                        <h5 class="font-semibold">Sales</h5>
                        <h3 class="text-4xl font-black mt-3 mb-1">120</h3>
                        <p class="text-sm text-primary">
                            12% <span><i class="fa fa-arrow-up"></i></span>
                        </p>
                    </div>
                    <div>
                        <svg
                            width="100%"
                            viewBox="0 0 258 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827"
                                style="stroke-width: 2px; stroke: #16b364"
                                stroke="10"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded-md shadow-sm flex items-center gap-20"
                >
                    <div>
                        <h5 class="font-semibold">Revenue</h5>
                        <h3 class="text-4xl font-black mt-3 mb-1">$1420</h3>
                        <p class="text-sm text-primary">
                            20% <span><i class="fa fa-arrow-up"></i></span>
                        </p>
                    </div>
                    <div>
                        <svg
                            width="100%"
                            viewBox="0 0 258 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827"
                                style="stroke-width: 2px; stroke: #16b364"
                                stroke="10"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded-md shadow-sm flex items-center gap-20"
                >
                    <div>
                        <h5 class="font-semibold">Visitors</h5>
                        <h3 class="text-4xl font-black mt-3 mb-1">365</h3>
                        <p class="text-sm text-red-400">
                            12%
                            <span><i class="fa fa-arrow-down"></i></span>
                        </p>
                    </div>
                    <div>
                        <svg
                            width="100%"
                            viewBox="0 0 115 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.5 1L2.74444 2.61495C3.98889 4.2299 6.47778 7.4598 8.96667 9.07151C11.4556 10.6832 13.9444 10.6767 16.4333 11.6127C18.9222 12.5487 21.4111 14.4271 23.9 16.6724C26.3889 18.9178 28.8778 21.5301 31.3667 20.1977C33.8556 18.8652 36.3444 13.5878 38.8333 11.3638C41.3222 9.13969 43.8111 9.96891 46.3 11.9894C48.7889 14.0099 51.2778 17.2217 53.7667 16.2045C56.2556 15.1873 58.7444 9.9412 61.2333 11.2783C63.7222 12.6155 66.2111 20.5359 68.7 21.4684C71.1889 22.401 73.6778 16.3458 76.1667 16.0009C78.6556 15.6561 81.1444 21.0217 83.6333 24.2684C86.1222 27.515 88.6111 28.6428 91.1 27.4369C93.5889 26.2311 96.0778 22.6916 98.5667 22.7117C101.056 22.7317 103.544 26.3112 106.033 29.7859C108.522 33.2605 111.011 36.6302 112.256 38.3151L113.5 40"
                                style="stroke-width: 1px; stroke: #fa7c71"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div
                    class="bg-white p-4 rounded-md shadow-sm flex items-center gap-20"
                >
                    <div>
                        <h5 class="font-semibold">Stock</h5>
                        <h3 class="text-4xl font-black mt-3 mb-1">120</h3>
                        <p class="text-sm text-primary">
                            12% <span><i class="fa fa-arrow-up"></i></span>
                        </p>
                    </div>
                    <div>
                        <svg
                            width="100%"
                            viewBox="0 0 258 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827"
                                style="stroke-width: 2px; stroke: #16b364"
                                stroke="10"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="grid grid-cols-4 gap-5">
                    <div
                        class="col-span-3 w-full bg-white p-4 rounded-md shadow-sm"
                    >
                        <div class="w-full flex justify-between items-center">
                            <h2 class="text-xl font-bold">Revenue Overview</h2>
                            <Select
                                v-model="selectedCity"
                                :options="cities"
                                optionLabel="name"
                                placeholder="Select a City"
                                class="w-full md:w-56"
                            />
                        </div>
                        <Chart
                            type="bar"
                            :data="chartData"
                            :options="chartOptions"
                            class="mt-10 w-full"
                        />
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm gap-20">
                        <h2 class="text-xl font-bold">Sales by category</h2>
                        <div class="h-full flex items-center">
                            <Chart
                                type="pie"
                                :data="chartData"
                                :options="chartOptions"
                                class="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div class="grid grid-cols-3 gap-5">
                    <div
                        class="col-span-2 w-full bg-white p-4 rounded-md shadow-sm"
                    >
                        <h2 class="text-xl font-bold">Recent Sales</h2>

                        <DataTable
                            :value="dummyData"
                            :paginator="true"
                            :rows="5"
                            :selectionMode="multiple"
                            class="mt-5"
                        >
                            <Column
                                field="id"
                                header="ID"
                                ortable
                                filter
                            ></Column>
                            <Column
                                field="name"
                                header="Name"
                                ortable
                                filter
                            ></Column>
                            <Column
                                field="quantity"
                                header="Quantity"
                                ortable
                                filter
                            ></Column>
                            <Column
                                field="amount"
                                header="Amount"
                                ortable
                                filter
                            ></Column>
                        </DataTable>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm gap-20">
                        <h2 class="text-xl font-bold">Top Products</h2>
                        <div class="h-full flex items-center">
                            <DataTable
                                :value="dummyData"
                                :rows="5"
                                :selectionMode="multiple"
                                :totalRecords="5"
                                class="mt-5"
                            >
                                <Column
                                    field="id"
                                    header="ID"
                                    ortable
                                    filter
                                ></Column>
                                <Column
                                    field="name"
                                    header="Name"
                                    ortable
                                    filter
                                ></Column>
                                <Column
                                    field="quantity"
                                    header="Quantity"
                                    ortable
                                    filter
                                ></Column>
                                <Column
                                    field="amount"
                                    header="Amount"
                                    ortable
                                    filter
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminMainLayout>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        borderWidth: 1,
                        data: [65, 59, 80, 81, 56, 55, 40],
                    },
                ],
            },
            chartOptions: {
                title: {
                    display: true,
                    text: "My First Chart.js",
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
            cities: [
                { name: "New York", value: "New York" },
                { name: "Los Angeles", value: "Los Angeles" },
                { name: "Chicago", value: "Chicago" },
                { name: "Houston", value: "Houston" },
                { name: "Philadelphia", value: "Philadelphia" },
                { name: "Phoenix", value: "Phoenix" },
                { name: "San Antonio", value: "San Antonio" },
            ],
            selectedCity: null,
            dummyData: [
                { id: 1, name: "Mobile", quantity: 30, amount: "$344" },
                { id: 2, name: "Charger", quantity: 3, amount: "$344" },
                { id: 3, name: "Chikon pin", quantity: 10, amount: "$44" },
                { id: 4, name: "Laptop", quantity: 4, amount: "$34" },
                { id: 5, name: "iPhen", quantity: 32, amount: "$3404" },
                { id: 6, name: "Mobile", quantity: 20, amount: "$344" },
                { id: 7, name: "Dhuru", quantity: 32, amount: "$3442" },
            ],
        };
    },
};
</script>
