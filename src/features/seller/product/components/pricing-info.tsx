import { type Control } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { type ProductFormValues } from "@/types/product-schema";

interface PricingInfoProps {
  control: Control<ProductFormValues>;
}

export function PricingInfo({ control }: PricingInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Price</FormLabel>
              <FormControl>
                <div className="relative">
                  <InputGroup>
                    <InputGroupAddon>₦</InputGroupAddon>
                    <InputGroupInput
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className="pl-7"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value) || "")
                      }
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>NGN</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
