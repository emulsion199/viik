import { Button } from "src/atoms/Button";
import { Input } from "src/atoms/Input";
import { Label } from "src/atoms/Label";
import { RadioGroup, Switch } from "@headlessui/react";
import { cc } from "#utils/string";
import ICON_CHECK from "#assets/icons/form/check.svg";
import Image from "next/image";
import { useMount } from "#hooks/useMount";
import useConsultFormRegister, { ConsultFormRegisterData } from "./form";
import { useController } from "react-hook-form";
import React from "react";

//STYLE
const RadioIcon = cc(
  "w-6 h-6 rounded-full absolute border-gray-2 border left-3",
  "hui-checked:border-[6px] hui-checked:border-primary hui-checked:bg-white"
);
const RadioButtonStyle = cc(
  "hui-checked:border-2 hui-checked:border-primary hui-checked:bg-bg-hover",
  "cursor-pointer border-gray-2 border row h-12 relative items-center justify-center"
);
const ToggleStyle = cc("w-5 h-5 rounded-[3.33px] border border-gray-1 ");
const ToggleSelectedStyle = cc("bg-black w-5 h-5 rounded-[3.33px]");

//TYPES
interface Props {
  className?: string;
}
const ConsultFormRegister = (props: Props) => {
  const { className } = props;
  //FORM
  const { control, formState, handleSubmit } = useConsultFormRegister();
  const name = useController({ control, name: "name" });
  const phone = useController({ control, name: "phone" });
  const type = useController({ control, name: "type" });
  const privacyAccept = useController({ control, name: "privacyAccept" });
  const submit = React.useCallback((data: ConsultFormRegisterData) => {
    const { name, phone, type, privacyAccept } = data;
    console.log(name, phone, type, privacyAccept);
  }, []);
  //HYDRATION ERROR
  const mounted = useMount();
  return (
    <form
      className={cc("column flex-1 gap-7", className)}
      onSubmit={handleSubmit(submit)}
    >
      <Label title={"이름"}>
        <Input
          placeholder={"이름"}
          {...name.field}
          error={formState.errors.name && true}
        />
        <span className={"text-xs text-error"}>
          {formState.errors.name?.message}
        </span>
      </Label>
      <Label title={"연락처"}>
        <Input
          placeholder={"010-0000-0000"}
          {...phone.field}
          error={formState.errors.phone && true}
        />
        <span className={"text-xs text-error"}>
          {formState.errors.phone?.message}
        </span>
      </Label>
      <Label title={"어떤 제품을 찾고 계신가요?"}>
        <RadioGroup className={"column gap-3"} {...type.field}>
          <RadioGroup.Option value={"소파"} className={RadioButtonStyle}>
            <div className={RadioIcon} />
            {"소파"}
          </RadioGroup.Option>
          <RadioGroup.Option value={"테이블"} className={RadioButtonStyle}>
            <div className={RadioIcon} />
            {"테이블"}
          </RadioGroup.Option>
          <RadioGroup.Option value={"기타"} className={RadioButtonStyle}>
            <div className={RadioIcon} />
            {"이미 추천 받았어요"}
          </RadioGroup.Option>
        </RadioGroup>
      </Label>
      <div className={"row justify-between"}>
        {mounted && (
          <Switch.Group {...privacyAccept.field}>
            <Switch className={"row gap-2 items-center"}>
              {({ checked }) => (
                <>
                  <div
                    className={checked ? ToggleSelectedStyle : ToggleStyle}
                  ></div>
                  {checked && (
                    <Image
                      className={"absolute"}
                      src={ICON_CHECK}
                      alt={"checked"}
                      width={20}
                      height={20}
                    ></Image>
                  )}
                  <span>{"개인정보 수집 이용 동의"}</span>
                </>
              )}
            </Switch>
          </Switch.Group>
        )}

        <p className={"underline"}>{"자세히보기"}</p>
      </div>
      <p className={"text-xs -mt-7 text-error"}>
        {formState.errors.privacyAccept?.message}
      </p>

      <Button
        disabled={formState.isSubmitting || !formState.isValid}
        className={"mt-2"}
        type={"button"}
        primary
      >
        {"상담 신청하기"}
      </Button>
      <Button className={"-mt-1"} border>
        {"VIIK의 가구를 더 살펴보세요"}
      </Button>
    </form>
  );
};
export default ConsultFormRegister;
