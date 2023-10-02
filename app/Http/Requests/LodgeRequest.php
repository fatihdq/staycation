<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LodgeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {

        switch ($this->method()) {
            case 'POST':
                return [
                    'phone'         => 'required|string|regex:/[0-9]/|max:255',
                    'email'         => 'required|string|email|max:255|unique:users',
                    'password'      => 'required|min:6|confirmed',
                    'name'          => 'required|string|max:255',
                    "description"   => 'required|string|max:1000',
                    'type'          => 'required',
                    'provincy'      => 'required',
                    'regency'       => 'required',
                    'district'      => 'required',
                    'village'       => 'required',
                    'address'       => 'required|string|max:255',
                    'image'         => 'required',
                    'image.*'       => '|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
                ];
            case 'PUT':
                switch ($this->route()->getName()) {
                    case 'spradm.lodge.update':
                        return [
                            'name'          => 'required|string|max:255',
                            "description"   => 'required|string|max:1000',
                            'type'          => 'required',
                            'provincy'      => 'required',
                            'regency'       => 'required',
                            'district'      => 'required',
                            'village'       => 'required',
                            'address'       => 'required|string|max:255',
                            'image'         => 'required',
                            'image.*'       => '|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
                        ];
                    case 'spradm.lodge.deactive':
                        return [
                            'disabled'      => 'required',
                        ];
                }

            case 'PATCH':
            case 'GET':
            case 'DELETE':
            default:
                return [];
                break;
            }

    }
}
