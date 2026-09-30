import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MdSearch } from "react-icons/md";

export default function Search() {
  return (
    <div className=" w-2/5 flex items-center gap-2">
      <InputGroup className="bg-background rounded-full h-12">
        <InputGroupInput
          className="text-base! font-medium placeholder:text-foreground/50 "
          placeholder="Course, topic, creator"
        />
        <InputGroupAddon className="ml-2" align="inline-start">
          <MdSearch className="size-5 text-foreground/50" />
        </InputGroupAddon>
      </InputGroup>
      <Button className="rounded-full h-12 px-6 font-semibold text-base cursor-pointer! z-10">
        Search
      </Button>
    </div>
  );
}
