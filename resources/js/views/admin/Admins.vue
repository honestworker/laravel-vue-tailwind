<template>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <h2>Users</h2>
    <div class="inline-block w-full shadow bg-white verflow-hidden">
      <data-table
        :url="url"
        :classes="classes"
        :framework="framework"
        :columns="columns"
        :per-page="[10, 20, 50]">
      </data-table>
    </div>
  </div>
</template>

<script>
import DataTableDropdownCell from '../components/DataTable/DataTableDropdownCell';
import DataTableIsActiveCell from '../components/DataTable/DataTableIsActiveCell';
import DataTableNameAndImageCell from '../components/DataTable/DataTableNameAndImageCell';
import { API_URL } from "../../common/config";

export default {
  data() {
    return {
      components: {
        // eslint-disable-next-line
        DataTableDropdownCell,
        // eslint-disable-next-line
        DataTableIsActiveCell,
        // eslint-disable-next-line
        DataTableNameAndImageCell,
      },
      url: API_URL + '/users',
      columns: [
        {
          width: 30,
          label: 'Name',
          name: 'name',
          orderable: true,
          component: DataTableNameAndImageCell
        },
        {
          label: 'Email',
          name: 'email',
          orderable: true,
        },
      ],
      filters: {
        search: true,
      },
      classes: {
        'table-container': {
        },
        table: {
          'text-left': true,
          'w-full': true,
        },
        "t-head": {
        },
        "t-body": {
        },
        "t-head-tr": {
        },
        "t-body-tr": {
        },
        "td": {
        },
        "th": {
        },
      },
      framework: "tailwind"
    };
  },
};
</script>
