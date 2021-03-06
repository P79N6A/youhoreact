'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _da_DK = require('rc-pagination/lib/locale/da_DK');

var _da_DK2 = _interopRequireDefault(_da_DK);

var _da_DK3 = require('../date-picker/locale/da_DK');

var _da_DK4 = _interopRequireDefault(_da_DK3);

var _da_DK5 = require('../time-picker/locale/da_DK');

var _da_DK6 = _interopRequireDefault(_da_DK5);

var _da_DK7 = require('../calendar/locale/da_DK');

var _da_DK8 = _interopRequireDefault(_da_DK7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    locale: 'da',
    DatePicker: _da_DK4['default'],
    TimePicker: _da_DK6['default'],
    Calendar: _da_DK8['default'],
    Pagination: _da_DK2['default'],
    Table: {
        filterTitle: 'Filtermenu',
        filterConfirm: 'OK',
        filterReset: 'Nulstil',
        emptyText: 'Ingen data',
        selectAll: 'Vælg alle',
        selectInvert: 'Inverter valg'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Afbryd',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Afbryd'
    },
    Transfer: {
        notFoundContent: 'Intet fundet',
        searchPlaceholder: 'Søg her',
        itemUnit: 'element',
        itemsUnit: 'elementer'
    },
    Select: {
        notFoundContent: 'Intet fundet'
    },
    Upload: {
        uploading: 'Uploader...',
        removeFile: 'Fjern fil',
        uploadError: 'Fejl ved upload',
        previewFile: 'Forhåndsvisning'
    }
};
module.exports = exports['default'];