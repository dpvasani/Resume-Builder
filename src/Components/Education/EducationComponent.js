import { Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "./EducationComponent.css";
import {BackNextBtnComponent,SelectComponent,InputComponent} from "../../Pages/index";
import { connect } from "react-redux";
import { addEducation } from "../../Redux/Actions/actions";
import { useForm, Controller } from "react-hook-form";

const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

const years = [
  " Present ",
  " 2024 ",
  " 2023 ",
  " 2022 ",
  " 2021 ",
  " 2020 ",
  " 2019 ",
  " 2018 ",
  " 2017 ",
  " 2016 ",
  " 2015 ",
  " 2014 ",
  " 2013 ",
  " 2012 ",
  " 2011 ",
  " 2010 ",
  " 2009 ",
  " 2008 ",
  " 2007 ",
  " 2006 ",
  " 2005 ",
  " 2004 ",
  " 2003 ",
  " 2002 ",
  " 2001 ",
  " 2000 ",
];

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);
    props.onAddEducation(data);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // console.log(props.educationInfo, errors);

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="education-form-cont">
          <InputComponent
            title={"Domain"}
            type={"text"}
            name={"domain"}
            register={register}
            multiline={false}
            value={props.educationInfo.domain}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, domain: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
          />
          <div></div>
          <InputComponent
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={(value) =>
              props.onAddEducation({
                ...props.educationInfo,
                university: value,
              })
            }
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />
          <InputComponent
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, degree: value })
            }
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />
          <SelectComponent
            title={"Start Year"}
            errorMessage={errors.startYear ? errors.startYear.message : null}
            error={errors.startYear ? true : false}>
            <Controller
              render={(props) => {
                // console.log(props);
                return (
                  <Select
                    value={props.field.value}
                    onChange={props.field.onChange}
                    error={errors.startYear ? true : false}>
                    {years.map((year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                  </Select>
                );
              }}
              name={"startYear"}
              control={control}
              rules={{ required: "*Please select start year" }}
              defaultValue={props.educationInfo.startYear}
            />
          </SelectComponent>
          <SelectComponent
            title={"End Year"}
            errorMessage={errors.endYear ? errors.endYear.message : null}
            error={errors.endYear ? true : false}>
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.endYear ? true : false}>
                  {years.map((year, index) => {
                    return (
                      <MenuItem key={index} value={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
              name={"endYear"}
              control={control}
              rules={{ required: "*Please select end year" }}
              defaultValue={props.educationInfo.endYear}
            />
          </SelectComponent>
        </div>
        <Divider sx={{ margin: "10px 0px" }} />
        <BackNextBtnComponent
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
