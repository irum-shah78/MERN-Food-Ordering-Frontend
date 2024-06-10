import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required.",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void
  placeHolder: string;
  onReset?: () => void;
};

const SearchBar = ({ onSubmit, onReset, placeHolder }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   searchQuery: ""
    // }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Search strokeWidth={2.5} size={30} className="ml-1 text-orange-500 hidden md:block" />

        <FormField control={form.control} name="searchQuery" render={({ field }) => <FormItem className="flex-1"></FormItem>} />
      </form>
    </Form>
  );
};

export default SearchBar;