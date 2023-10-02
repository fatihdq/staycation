import SideBar from "@/Pages/AdminStaycation/SideBar";
import Navbar from "@/Pages/AdminStaycation/Navbar";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputLongText from "@/Components/InputLongText";
import InputSelect from "@/Components/InputSelect";
import InputImage from "@/Components/InputImage";

import { usePage, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function EditLodge() {
  const { errors, data, lodgeType } = usePage().props;
  const lodge = data["lodge"];

  const [arrData, setArrData] = useState({
    provinces: [],
    regencies: [],
    districts: [],
    villages: [],
  });

  const [isDisabled, setIsDisabled] = useState({
    provincy: false,
    regency: false,
    district: false,
    village: false,
  });

  const [region, setRegion] = useState({
    provincy: lodge.region.provincy.id,
    regency: lodge.region.regency.id,
    district: lodge.region.district.id,
    village: lodge.region.village.id,
    initialRegency: true,
    initialDistrict: true,
    initialVillage: true,
  });

  const form = useForm({
    name: lodge.name,
    description: lodge.description,
    type: lodge.lodge_type.id,
    address: lodge.address,
    provincy: lodge.region.provincy.id,
    regency: lodge.region.regency.id,
    district: lodge.region.district.id,
    village: lodge.region.village.id,
    image: null,
  });

  const getProvinces = async () => {
    await fetch("/getProvinces")
      .then((response) => response.json())
      .then((data) =>
        setArrData((values) => ({
          ...values,
          ["provinces"]: data,
        }))
      )
      .catch((error) => console.error(error));
  };

  const getRegencies = async (provincy) => {
    await fetch(`/getRegencies?id=${provincy}`)
      .then((response) => response.json())
      .then((data) =>
        setArrData((values) => ({
          ...values,
          ["regencies"]: data,
        }))
      )
      .catch((error) => console.error(error));
  };
  const getDistricts = async (regency) => {
    await fetch(`/getDistricts?id=${regency}`)
      .then((response) => response.json())
      .then((data) =>
        setArrData((values) => ({
          ...values,
          ["districts"]: data,
        }))
      )
      .catch((error) => console.error(error));
  };
  const getVillages = async (village) => {
    await fetch(`/getVillages?id=${village}`)
      .then((response) => response.json())
      .then((data) =>
        setArrData((values) => ({
          ...values,
          ["villages"]: data,
        }))
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    form.setData("provincy", region.provincy);
    if (region.provincy !== null) {
      getRegencies(region.provincy);

      if (!region.initialRegency) {
        setIsDisabled((values) => ({
          ...values,
          ["regency"]: false,
        }));
        setRegion((values) => ({
          ...values,
          ["regency"]: null,
        }));

        setArrData((values) => ({
          ...values,
          ["districts"]: [],
        }));
        setRegion((values) => ({
          ...values,
          ["district"]: null,
        }));
        setIsDisabled((values) => ({
          ...values,
          ["district"]: true,
        }));

        setArrData((values) => ({
          ...values,
          ["villages"]: [],
        }));
        setRegion((values) => ({
          ...values,
          ["village"]: null,
        }));
        setIsDisabled((values) => ({
          ...values,
          ["village"]: true,
        }));
      } else {
        setRegion((values) => ({
          ...values,
          ["initialRegency"]: false,
        }));
      }
    }
  }, [region.provincy]);

  useEffect(() => {
    form.setData("regency", region.regency);
    if (region.regency !== null) {
      getDistricts(region.regency);

      if (!region.initialDistrict) {
        setRegion((values) => ({
          ...values,
          ["district"]: null,
        }));
        setIsDisabled((values) => ({
          ...values,
          ["district"]: false,
        }));

        setArrData((values) => ({
          ...values,
          ["villages"]: [],
        }));
        setRegion((values) => ({
          ...values,
          ["village"]: null,
        }));
        setIsDisabled((values) => ({
          ...values,
          ["village"]: true,
        }));
      } else {
        setRegion((values) => ({
          ...values,
          ["initialDistrict"]: false,
        }));
      }
    }
  }, [region.regency]);

  useEffect(() => {
    form.setData("district", region.district);
    if (region.district !== null) {
      getVillages(region.district);

      if (!region.initialVillage) {
        setRegion((values) => ({
          ...values,
          ["village"]: null,
        }));
        setIsDisabled((values) => ({
          ...values,
          ["village"]: false,
        }));
      } else {
        setRegion((values) => ({
          ...values,
          ["initialVillage"]: false,
        }));
      }
    }
  }, [region.district]);

  useEffect(() => {
    form.setData("village", region.village);
  }, [region.village]);

  const postUpdateLodge = async (e) => {
    e.preventDefault();
    form.post(
      route("spradm.lodge.update", {
        id: lodge.id,
        _method: "PUT",
      }),
      {
        forceFormData: true,
      }
    );
  };

  return (
    <>
      <main id="react-app" className="admin-main">
        <section className="container mx-auto pt-2">
          <form onSubmit={postUpdateLodge}>
            <div className="pb-5">
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">
                  Lodges Information
                </h2>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Basic information for initial logde creation
              </p>
            </div>

            <div className="flex justify-start gap-x-5">
              <div>
                <Input
                  label="Lodge Name"
                  type="text"
                  id="name"
                  initialValue={lodge.name}
                  placeholder="Please input your lodge name"
                  handleOnChange={(value) => form.setData("name", value)}
                  required
                />
                <p className="text-red-500 text-xs italic pb-2">
                  {errors.name}
                </p>

                <InputLongText
                  label="Description"
                  type="text"
                  id="description"
                  initialValue={lodge.description}
                  placeholder="Please input description"
                  handleOnChange={(value) => form.setData("description", value)}
                  required
                />

                <p className="text-red-500 text-xs italic pb-2">
                  {errors.description}
                </p>

                <InputSelect
                  label="Type"
                  id="type"
                  arrData={lodgeType}
                  placeholder="Please input type"
                  initialValue={lodge.lodge_type.id}
                  handleOnChange={(value) => form.setData("type", value)}
                  required
                />

                <p className="text-red-500 text-xs italic pb-2">
                  {errors.type}
                </p>

                <InputLongText
                  label="Detail Address"
                  type="text"
                  id="address"
                  initialValue={lodge.address}
                  placeholder="Please input description"
                  handleOnChange={(value) => form.setData("address", value)}
                  required
                />

                <p className="text-red-500 text-xs italic pb-2">
                  {errors.address}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <hr className=" w-0.5 h-full bg-gray-100 flex items-center" />
              </div>
              <div>
                <InputSelect
                  label="Provincy"
                  id="provincy"
                  arrData={arrData["provinces"]}
                  placeholder="Please input provincy"
                  initialValue={region.provincy}
                  handleOnChange={(value) =>
                    setRegion((values) => ({ ...values, ["provincy"]: value }))
                  }
                  required
                  disabled={isDisabled.provincy}
                />
                <p className="text-red-500 text-xs italic pb-2"></p>

                <InputSelect
                  label="Regency"
                  id="regency"
                  arrData={arrData["regencies"]}
                  placeholder="Please input regency"
                  initialValue={region.regency}
                  handleOnChange={(value) =>
                    setRegion((values) => ({ ...values, ["regency"]: value }))
                  }
                  required
                  disabled={isDisabled.regency}
                />
                <p className="text-red-500 text-xs italic pb-2"></p>

                <InputSelect
                  label="District"
                  id="district"
                  arrData={arrData["districts"]}
                  placeholder="Please input district"
                  initialValue={region.district}
                  handleOnChange={(value) =>
                    setRegion((values) => ({ ...values, ["district"]: value }))
                  }
                  required
                  disabled={isDisabled.district}
                />
                <p className="text-red-500 text-xs italic pb-2"></p>
                <InputSelect
                  label="Village"
                  id="village"
                  arrData={arrData["villages"]}
                  placeholder="Please input village"
                  initialValue={region.village}
                  handleOnChange={(value) =>
                    setRegion((values) => ({ ...values, ["village"]: value }))
                  }
                  required
                  disabled={isDisabled.village}
                />

                <p className="text-red-500 text-xs italic pb-2">
                  {errors.region}
                </p>
              </div>
            </div>

            <div className="pt-5">
              <p className="text-red-500 text-xs italic pb-2">{errors.image}</p>
              <InputImage
                label="Input Lodge Images"
                imageLimit={3}
                handleOnChange={(value) => form.setData("image", value)}
                initialValue={lodge.imageurl}
              />
            </div>

            <div className="pt-10">
              <Button type="submit" title="Edit" isPrimary isLarge />
            </div>
          </form>
        </section>
      </main>
      <Navbar />
      <SideBar pageTitle={data.pageTitle} />
    </>
  );
}
