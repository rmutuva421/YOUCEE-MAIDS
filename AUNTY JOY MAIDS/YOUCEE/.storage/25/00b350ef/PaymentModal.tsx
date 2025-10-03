import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone, DollarSign, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
  userType: string;
}

export default function PaymentModal({ isOpen, onClose, onSuccess, amount, userType }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState('paynow');
  const [paymentData, setPaymentData] = useState({
    phoneNumber: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock payment success
    toast.success('Payment successful!');
    setProcessing(false);
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Complete Your Registration</span>
          </DialogTitle>
          <DialogDescription>
            Pay your registration fee of ${amount} to activate your {userType} account
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedMethod} onValueChange={setSelectedMethod} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="paynow">PayNow</TabsTrigger>
            <TabsTrigger value="ecocash">Ecocash</TabsTrigger>
            <TabsTrigger value="onemoney">OneMoney</TabsTrigger>
            <TabsTrigger value="innbucks">InnBucks</TabsTrigger>
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
          </TabsList>

          {/* PayNow */}
          <TabsContent value="paynow">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>PayNow Payment</span>
                </CardTitle>
                <CardDescription>Pay using PayNow mobile money</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">PayNow Details:</p>
                  <p className="text-sm text-blue-700">Number: +263 77 119 6936</p>
                  <p className="text-sm text-blue-700">Amount: ${amount}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="paynow-phone">Your Phone Number</Label>
                  <Input
                    id="paynow-phone"
                    placeholder="+263 77 XXX XXXX"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Instructions:</strong> Send ${amount} to +263 77 119 6936 via PayNow, 
                    then enter your phone number above and click "Confirm Payment".
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ecocash */}
          <TabsContent value="ecocash">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Ecocash Payment</span>
                </CardTitle>
                <CardDescription>Pay using Ecocash mobile wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-900">Ecocash Details:</p>
                  <p className="text-sm text-orange-700">Number: +263 77 119 6936</p>
                  <p className="text-sm text-orange-700">Amount: ${amount}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ecocash-phone">Your Phone Number</Label>
                  <Input
                    id="ecocash-phone"
                    placeholder="+263 77 XXX XXXX"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Instructions:</strong> Send ${amount} to +263 77 119 6936 via Ecocash, 
                    then enter your phone number above and click "Confirm Payment".
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* OneMoney */}
          <TabsContent value="onemoney">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>OneMoney Payment</span>
                </CardTitle>
                <CardDescription>Pay using OneMoney mobile wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-900">OneMoney Details:</p>
                  <p className="text-sm text-green-700">Number: +263 71 660 7886</p>
                  <p className="text-sm text-green-700">Amount: ${amount}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="onemoney-phone">Your Phone Number</Label>
                  <Input
                    id="onemoney-phone"
                    placeholder="+263 71 XXX XXXX"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Instructions:</strong> Send ${amount} to +263 71 660 7886 via OneMoney, 
                    then enter your phone number above and click "Confirm Payment".
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* InnBucks */}
          <TabsContent value="innbucks">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>InnBucks Payment</span>
                </CardTitle>
                <CardDescription>Pay using InnBucks mobile money</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-900">InnBucks Details:</p>
                  <p className="text-sm text-purple-700">Number: +263 77 119 6936</p>
                  <p className="text-sm text-purple-700">Amount: ${amount}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="innbucks-phone">Your Phone Number</Label>
                  <Input
                    id="innbucks-phone"
                    placeholder="+263 77 XXX XXXX"
                    value={paymentData.phoneNumber}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Instructions:</strong> Send ${amount} to +263 77 119 6936 via InnBucks, 
                    then enter your phone number above and click "Confirm Payment".
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PayPal */}
          <TabsContent value="paypal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span>PayPal Payment</span>
                </CardTitle>
                <CardDescription>Pay securely with PayPal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paypal-email">PayPal Email (Optional)</Label>
                  <Input
                    id="paypal-email"
                    type="email"
                    placeholder="your-email@example.com"
                    value={paymentData.email}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Secure PayPal Payment</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    You will be redirected to PayPal to complete your ${amount} payment securely.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> PayPal payments are processed instantly. 
                    You'll receive a confirmation email once payment is complete.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Payment Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Registration Fee ({userType}):</span>
            <span className="text-2xl font-bold text-blue-600">${amount}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            One-time payment • Full platform access • {userType === 'maid' ? 'Second visits only $10' : 'Complete access to maids'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handlePayment} 
            disabled={processing}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {processing ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Processing...</span>
              </div>
            ) : (
              `Confirm Payment - $${amount}`
            )}
          </Button>
        </div>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            🔒 Your payment information is secure and encrypted. 
            We do not store your payment details.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}